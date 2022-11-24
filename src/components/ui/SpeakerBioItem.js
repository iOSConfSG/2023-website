import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"

function SpeakerBioItem (props) {
  const { handleClick, speaker } = props

  const hasLinkedIn = (speaker && Object.prototype.hasOwnProperty.call(speaker, 'linkedin') && speaker.linkedin !== '')
  const hasTwitter = (speaker && Object.prototype.hasOwnProperty.call(speaker, 'twitter') && speaker.twitter !== '')

  return (
    <div className="space-y-6">
      { speaker &&
        <>
          <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={speaker.imageUrl} onClick={handleClick} />
          <div className="space-y-2">
            <div className="flex-col justify-center text-lg leading-6 font-medium space-y-1">
              <h4 className="text-center text-gray-900">{speaker.name}</h4>
              <p className="text-orange-600 text-center">
                <a href={speaker.companyUrl} target="_blank" rel="noopener noreferrer">{speaker.company}</a>
              </p>
              <div className="flex justify-center">
              {hasTwitter &&
                <Link href={`https://twitter.com/${speaker.twitter}`} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="1x" icon={faTwitter} />
                  </a>
                </Link>
              }
              {hasLinkedIn &&
                <Link className="ml-1" href={speaker.linkedin} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    &nbsp;<FontAwesomeIcon size="1x" icon={faLinkedin} />
                  </a>
                </Link>}
              </div>
              {
                speaker.shortBio &&
                <p className="text-sm text-center text-gray-800 font-light">{speaker.shortBio}</p>
              }              
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default SpeakerBioItem
