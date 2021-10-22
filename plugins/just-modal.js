function _createModal(options) {
  const justModal = document.createElement('div');
  justModal.classList.add('just-modal');
  justModal.insertAdjacentHTML('afterbegin', `
    <div class="just-modal-overlay">
      <div class="just-modal-window">
        <div class="just-modal-header">
          <span class="just-modal-title">Hello, I'm a Just Modal</span>
          <span class="just-modal-close">&times;</span>
        </div>
        <div class="just-modal-content">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="just-modal-footer">
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  `);
  document.body.appendChild(justModal);
  return justModal;
}

just.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const justModal = _createModal(options);
  let closing = false;

  return {
    open() {
      !closing && justModal.classList.add('open')
    },
    close() {
      closing = true;
      justModal.classList.remove('open')
      justModal.classList.add('hiding')
      setTimeout(() => {
        justModal.classList.remove('hiding')
        closing = false;
      }, ANIMATION_SPEED)
    },
    destroy() {},
  }
}