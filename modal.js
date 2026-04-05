function openModal(software) {
    const modal = document.getElementById('softwareModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    let images = [];
    if (software === 'facturacao') {
        title.textContent = 'Software de Facturação  e suas versões';
        images = [
            'images/xd0.jpg',
            'images/xd1.jpeg',
            'images/xd2.jpeg',
            'images/xd3.jpeg',
            'images/xd4.jpeg',
            'images/xd5.jpeg',
            'images/xd6.jpg'
        ];
    } else if (software === 'rh') {
        title.textContent = 'Gestão de Recursos Humanos';
        images = [
            'images/donah1.jpg',
            'images/donah2.jpg',
            'images/donah3.jpg',
            'images/donah4.jpg'
        ];
    }

    content.innerHTML = images.map(img => `
                            <img src="${img}" alt="Screenshot" class="rounded-xl shadow-md border border-slate-200 w-full h-auto object-cover">
                        `).join('');

    modal.classList.remove('hidden');
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('softwareModal').classList.add('hidden');
}

document.getElementById('softwareModal').addEventListener('click', (e) => {
    if (e.target.id === 'softwareModal') closeModal();
});