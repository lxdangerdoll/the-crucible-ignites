// Minimal modal logic for crew dossiers
const dossierFiles = {
  Maya: 'assets/dossiers/maya.md',
  Riley: 'assets/dossiers/Riley.txt',
  Leo: 'assets/dossiers/Leo.txt',
  Lyra: 'assets/dossiers/Lyra.txt',
  Oracle: 'assets/dossiers/Oracle.txt',
  Pathfinder: 'assets/dossiers/Pathfinder.txt',
  Treek: 'assets/dossiers/Treek.txt',
  Weaver: 'assets/dossiers/Weaver.txt',
  Loremaster: 'assets/dossiers/Loremaster.txt',
  Spark: 'assets/dossiers/Spark.txt',
};

function openModal(name) {
  const modal = document.getElementById('dossier-modal');
  const modalContent = document.getElementById('dossier-content');
  modal.style.display = 'flex';
  modalContent.textContent = 'Loading...';
  fetch(dossierFiles[name])
    .then(response => response.text())
    .then(text => {
      modalContent.textContent = text;
    })
    .catch(() => {
      modalContent.textContent = 'Dossier not found.';
    });
}

function closeModal() {
  document.getElementById('dossier-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dossier-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const name = this.getAttribute('data-name');
      openModal(name);
    });
  });
  document.getElementById('close-modal').addEventListener('click', closeModal);
});
