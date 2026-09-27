import { faculty as staticFaculty } from '../../data/faculty';
import { useSanityFetch } from '../../hooks/useSanityFetch';
import { FACULTY_QUERY } from '../../lib/sanityQueries';

export default function FacultySection() {
  const { data: faculty } = useSanityFetch(FACULTY_QUERY, {}, staticFaculty);
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="faculty">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Academic Leadership
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            Meet the Minds Behind SEZ
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Our mentors do not just lecture; they inspire, guide, and patiently clear every single obstacle between a student and their dream score.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-lg transition-all flex flex-col border border-surface-container/60"
            >
              <div className="w-full h-56 rounded-xl overflow-hidden mb-space-md bg-surface-container">
                <img
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  src={member.image}
                />
              </div>
              <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold w-max">
                {member.role}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                {member.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                {member.qualification}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

