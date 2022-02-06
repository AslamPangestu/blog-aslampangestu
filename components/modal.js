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
      className="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/75 dark:bg-white/75 transition-opacity"
          aria-hidden="true"
          onClick={closeOutside}
        />
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        {showClose && (
          <Button
            name="close"
            className="text-white/75 dark:text-black/75 absolute top-px right-px"
            icon="times"
            iconSize="2x"
            onClick={onClose}
          />
        )}
        <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
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
