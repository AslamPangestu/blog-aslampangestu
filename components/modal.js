// https://tailwindui.com/components/application-ui/overlays/modals
import PropTypes from "prop-types"

import Button from "./button"

const Modal = ({ children, onClose, showClose, canCloseOutside }) => {
  const closeOutside = () => {
    if (!canCloseOutside) {
      return
    }
    onClose()
  }
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/75 transition-opacity dark:bg-white/75"
          aria-hidden="true"
          onClick={closeOutside}
        />
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        {showClose && (
          <Button
            name="close"
            className="absolute top-px right-px text-white/75 dark:text-black/75"
            icon="times"
            iconSize="2x"
            onClick={onClose}
          />
        )}
        <div className="inline-block transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:align-middle">
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
  showClose: PropTypes.bool,
  canCloseOutside: PropTypes.bool,
}

export default Modal
