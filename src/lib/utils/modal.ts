// Gestion centralisée des modales pour accessibilité et robustesse

export function openModal(modalElement: HTMLElement | null) {
  if (!modalElement) return;
  modalElement.classList.add('is-open');
  modalElement.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Focus trap
  const focusable = getFocusableElements(modalElement);
  if (focusable.length) focusable[0].focus();
}

export function closeModal(modalElement: HTMLElement | null) {
  if (!modalElement) return;
  modalElement.classList.remove('is-open');
  modalElement.setAttribute('aria-hidden', 'true');
  // Rendre le scroll si plus aucune modale ouverte
  const anyModalOpen = document.querySelector('.modal.is-open');
  if (!anyModalOpen) {
    document.body.style.overflow = '';
  }
}

export function getFocusableElements(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}

export function trapFocus(modalElement: HTMLElement) {
  function handleTab(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    const focusable = getFocusableElements(modalElement);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  modalElement.addEventListener('keydown', handleTab);
  return () => modalElement.removeEventListener('keydown', handleTab);
}
