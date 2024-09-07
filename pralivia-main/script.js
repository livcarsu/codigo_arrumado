// MODAL PAG INDEX


function areFieldsFilled() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    return name !== '' && age !== '';
}

function handleFormSubmit(event) {
    // Impede o envio do formulário padrão
    event.preventDefault();
    const caixaFundo = document.getElementsByClassName('modal-content');
    const errorMessage = document.getElementById('errorMessage');

    if (areFieldsFilled()) {
        // Se os campos estiverem preenchidos, esconda a mensagem de erro e vá para o próximo modal
        errorMessage.style.display = 'none';

        showNextModal('modal2');
    } else {
        // Caso contrário, exiba a mensagem de erro
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        
    }
}

function showNextModal(modalId) {
    const modals = document.querySelectorAll('.modal');
    const modal1 = document.querySelector('#modal1')
    modals.forEach(modal => modal.style.display = 'none');

    const nextModal = document.getElementById(modalId);
    if (nextModal) {
        nextModal.style.display = 'flex';
        clearSelection();
       
    }
}

// Exibe a primeira modal ao clicar no botão "INICIAR TESTE"
document.querySelector('.btnIniciar').addEventListener('click', function() {
    showNextModal('modal1');
});

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";

    // Redireciona para a página de jogo após o fechamento do modal
    if (modalId === 'modal3') {
        window.location.href = 'quest1.html';
    }
}

// TERMINO MODAL PAG INDEX 


//controla card com resultados 2° pag.
function showContent(contentId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    document.getElementById(contentId).style.display = 'block';

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    document.querySelector(`.nav-link[href="#${contentId}"]`).classList.add('active');
}


// AVATARES

// Variável para armazenar a seleção do avatar
let isAvatarSelected = false;

// Adiciona evento de clique em cada imagem de avatar
document.querySelectorAll('.avatar').forEach(avatar => {
    avatar.addEventListener('click', function() {
        // Remove a seleção de todos os avatares
        document.querySelectorAll('.avatar').forEach(img => img.classList.remove('selected'));
        
        // Marca a imagem clicada como selecionada
        this.classList.add('selected');
        isAvatarSelected = true; // Marca que um avatar foi selecionado
        
        // Oculta a mensagem de erro
        document.getElementById('errorMessage').style.display = 'none';
    });
});


const images = [
    { id: 'selectOrca', name: 'Orca' },
    { id: 'selectRena', name: 'Rena' },
    { id: 'selectLeao', name: 'Leão-marinho' }
];

// Função para desmarcar todas as imagens
function clearSelection() {
    images.forEach(image => {
        document.getElementById(image.id).classList.remove('selected');
    });
}

// Função para marcar a imagem clicada
function selectImage(imageId) {
    clearSelection();  // Remove a seleção de todas as outras imagens
    document.getElementById(imageId).classList.add('selected');
    lastSelectedImageId = imageId;  // Armazena o ID da última imagem clicada
}

// Função para salvar a última seleção no localStorage e especificar a imagem selecionada


// Verifica e aplica o estado de seleção ao carregar a página
function loadSelectionState() {
    const selectedImageId = localStorage.getItem('selectedImage');
    if (selectedImageId) {
        document.getElementById(selectedImageId).classList.add('selected');
        lastSelectedImageId = selectedImageId;  // Atualiza o ID da última imagem salva
    }
}

// Adiciona eventos de clique para cada imagem
images.forEach(image => {
    const imgElement = document.getElementById(image.id);

    // Aplica a seleção ao clicar
    imgElement.addEventListener('click', function() {
        selectImage(image.id);
    });
});

// Adiciona evento de clique ao botão para salvar a seleção
document.getElementById('saveSelection').addEventListener('click', saveSelection);

// Carrega o estado de seleção ao inicializar a página
window.addEventListener('load', loadSelectionState);

function clearSelection() {
    images.forEach(image => {
        document.getElementById(image.id).classList.remove('selected');
    });
}

window.addEventListener('load', function() {
    clearSelection();  // Remove seleção ao carregar
    lastSelectedImageId = null;  // Reseta a seleção inicial

});
