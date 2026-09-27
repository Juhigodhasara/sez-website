import { useState, useEffect } from 'react';
import { sanityClient, isSanityConfigured } from '../lib/sanityClient';

/**
 * useSanityFetch — Universal Sanity data fetching hook
 *
 * @param {string} query         - GROQ query string
 * @param {object} params        - Query parameters (e.g. {slug: 'my-post'})
 * @param {*}      fallbackData  - Static data to use while Sanity is not configured
 *
 * @returns {{ data, loading, error }}
 *
 * Behaviour:
 * - If Sanity is NOT configured (placeholder project ID): returns fallbackData immediately
 * - If Sanity IS configured: fetches live data, shows fallbackData during loading
 * - On error: logs to console and returns fallbackData
 */
export function useSanityFetch(query, params = {}, fallbackData = null) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured()) {
      // Not yet configured — use static fallback silently
      setData(fallbackData);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    sanityClient
      .fetch(query, params)
      .then((result) => {
        if (!cancelled) {
          // If Sanity returned data, use it; else fall back to static
          setData(result && (Array.isArray(result) ? result.length > 0 : result !== null) ? result : fallbackData);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('[Sanity] Fetch error:', err.message);
          setError(err);
          setData(fallbackData); // Graceful fallback
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, loading, error };
}

