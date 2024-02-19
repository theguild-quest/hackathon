import React, {
  Dispatch,
  ReactElement,
  Ref,
  SetStateAction,
  useRef,
  useState
} from 'react'
import ReactPopup from 'reactjs-popup'
import classes from './Popup.module.sass'
import closeIcon from '@/assets/icons/close.svg'
import arrowLeftIcon from '@/assets/icons/arrow-left.svg'
import Image from 'next/image'
import Typography from '../Typography'
import { PopupActions } from 'reactjs-popup/dist/types'

type PopupProps = {
  open: boolean
  setOpen: (value: boolean) => void
  title?: string
  triggerElement: ReactElement
  contentElement: ReactElement
}

const Popup: React.FC<PopupProps> = ({
  open,
  setOpen,
  title = '',
  triggerElement,
  contentElement
}) => {
  const ref = useRef()

  const closeModal = () => setOpen(false)

  return (
    <div>
      {React.cloneElement(triggerElement, {
        onClick: () => setOpen(!open)
      })}
      {open && <div className={classes.overlay} />}
      <ReactPopup
        // @ts-ignore
        ref={ref}
        open={open}
        // closeOnDocumentClick
        onClose={closeModal}
        className={classes.popup}
      >
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.mobileHeader}>
              <Image
                src={arrowLeftIcon}
                alt="back-icon"
                onClick={closeModal}
                className={classes.backIcon}
              />
              <Typography variant="bodyXL">{title}</Typography>
              <Image
                src={closeIcon}
                alt="close-icon"
                onClick={closeModal}
                className={classes.closeIcon}
              />
            </div>
          </div>
          <div className={classes.content}>{contentElement}</div>
        </div>
      </ReactPopup>
    </div>
  )
}

export default Popup
