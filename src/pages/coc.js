
import { PageTitle, Header, Footer } from "@/components"

export default function CodeOfConduct () {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div className="relative">
          <PageTitle title="Code of Conduct"/>
        </div>
        
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p>
              All iOS Conf SG attendees must agree with the following the code of conduct. The organisers aim to keeping all the attendees and our entire community safe, being an open, respectful, and inclusive community. That means unrespectful and unacceptable behavior isn&rsquo;t allowed at any iOS Conf SG events (including after-parties).
            </p>
            <p className="my-4">
              Here&rsquo;s a reminder of the things we don&rsquo;t allow: jokes or offensive comments about sex/sexuality/race/religion/nationality/body size, showing porn in public, touching people uninvited, or continuing to interact with someone after they&rsquo;ve asked you to stop. Continuous violations may result in getting expelled from the conference.
            </p>
            <p>
              Examples of behavior that contributes to creating a positive environment:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Being respectful of differing viewpoints and experiences</li>
              <li>Gracefully accepting constructive criticism</li>
              <li>Using welcoming and inclusive language</li>
              <li>Focusing on what is best for the community</li>
              <li>Showing empathy towards other community members</li>
            </ul>
            <p>
              This policy is a shortened, more casual version of the longer Code of Conduct policy.&nbsp;
              Read full version from <a
                href="https://www.contributor-covenant.org/"
                target="_blank"
                rel="noreferrer"
              >
                 contributor-covenant.org
              </a>
              .
            </p>
            <p className="my-4">
              If someone is bothering you, please tell iOS Conf SG Organizers immediately and they will take care of it. We want to maintain iOS
              Conf SG&rsquo;s awesomeness.
            </p>
            <h3>Contacts:</h3>
            <ul>
              <li>
                Vina, <a href="mailto:vina&#64;iosconf.sg">vina@iosconf.sg</a>
              </li>
              <li>
                Subhransu Behera, <a href="mailto:subh&#64;iosconf.sg">subh@iosconf.sg</a>
              </li>
              <li>
                Melvin Tan, <a href="mailto:melvin&#64;iosconf.sg">melvin@iosconf.sg</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  )
}
