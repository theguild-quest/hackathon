'use client'

import image from '@/assets/image.svg'
import Typography from '@/components/atoms/Typography'
import Popup from '@/components/atoms/Popup'
import { createRef, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import zoomOutIcon from '@/assets/icons/zoom-in.svg'
import zoomInIcon from '@/assets/icons/zoom-out.svg'

import { Range, getTrackBackground } from 'react-range'
import Image from 'next/image'
import ProfileButton from '@/components/atoms/ProfileButton'
import classes from './RepositionImage.module.sass'

type Props = {
  profileImage: string
  isBanner?: boolean
  save: (img: string) => void
}

export default function RepositionImage({
  profileImage,
  isBanner,
  save
}: Props) {
  const MAX = 50
  const MIN = 10
  const STEP = 1

  const [showRepositionImagePopup, setShowRepositionImagePopup] =
    useState(false)
  const [slideValue, setSlideValue] = useState<number>(10)
  const repositionRef: React.RefObject<AvatarEditor> = createRef()

  const handleSave = () => {
    if (repositionRef?.current) {
      //@ts-ignore
      const canvas = repositionRef.current.getImage()
      // const canvasScaled = repositionRef.current.getImageScaledToCanvas()
      console.log(canvas)
      // console.log(canvasScaled)
      fetch(canvas.toDataURL()).then((res) => {
        save(res.url)
        setShowRepositionImagePopup(false)
      })
    }
  }

  const handleZoomClick = (type: boolean) => {
    setSlideValue(type ? slideValue + STEP : slideValue - STEP)
  }

  return (
    <Popup
      open={showRepositionImagePopup}
      setOpen={setShowRepositionImagePopup}
      title="Reposition Image"
      triggerElement={
        <Typography
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          variant="bodyM"
        >
          Reposition Image
        </Typography>
      }
      contentElement={
        <div className={classes.repositionImage}>
          <div>
            <AvatarEditor
              ref={repositionRef}
              image={profileImage}
              borderRadius={isBanner ? 0 : 150}
              border={10}
              scale={slideValue / 10}
              width={isBanner ? 530 : 300}
              height={isBanner ? 96 : 300}
              // crossOrigin="anonymous" // uncomment after CORS is setup

              // onImageReady={(e) => console.log('Image Ready', e)}
              onLoadFailure={(e) => console.log('Load Failure', e)}
              onLoadSuccess={(e) => console.log('Load Success', e)}
              //
            />
          </div>

          <div className={classes.rangeContainer}>
            <div>
              <Image
                src={zoomOutIcon}
                alt="zoom-out"
                onClick={() => (slideValue > MIN ? handleZoomClick(false) : {})}
                style={{
                  cursor: slideValue <= MIN ? 'not-allowed' : 'pointer'
                }}
              />
            </div>
            <Range
              step={STEP}
              min={MIN}
              max={MAX}
              values={[slideValue]}
              onChange={(values) => setSlideValue(values[0])}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: '36px',
                    display: 'flex',
                    width: '70%'
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values: [slideValue],
                        colors: ['orange', 'white'],
                        min: MIN,
                        max: MAX
                      }),
                      alignSelf: 'center'
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'orange',
                    boxShadow: isDragged ? '0px 2px 6px #AAA' : ''
                  }}
                />
              )}
            />
            <div>
              <Image
                src={zoomInIcon}
                alt="zoom-in"
                onClick={() => (slideValue < MAX ? handleZoomClick(true) : {})}
                style={{
                  cursor: slideValue >= MAX ? 'not-allowed' : 'pointer'
                }}
              />
            </div>
          </div>

          <div>
            <ProfileButton
              variantButton="secondary"
              color="dark"
              weight="semibold"
              pressed={false}
              size="big"
              variant="bodyL"
              onClick={handleSave}
            >
              Save
            </ProfileButton>
          </div>
        </div>
      }
    />
  )
}
