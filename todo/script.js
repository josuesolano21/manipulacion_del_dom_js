/**
 * ============================================
 * EJERCICIO DE MANIPULACIÓN DEL DOM
 * ============================================
 * 
 * Objetivo: Aplicar conceptos del DOM para seleccionar elementos,
 * responder a eventos y crear nuevos elementos dinámicamente.
 * 
 * Autor: [Tu nombre aquí]
 * Fecha: [Fecha actual]
 * ============================================
 */

// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

/**
 * Seleccionamos los elementos del DOM que necesitamos manipular.
 * Usamos getElementById para obtener referencias a los elementos únicos.
 */

// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

// Formulario de búsqueda de usuario
const searchForm = document.getElementById('searchForm');

// Input del documento del usuario
const userIdInput = document.getElementById('userIdInput');

// Error del input de búsqueda
const userIdError = document.getElementById('userIdError');

// Contenedor donde se muestran los datos del usuario
const userContainer = document.getElementById('userContainer');

// Estado vacío del contenedor de usuario
const userEmptyState = document.getElementById('userEmptyState');

// Mensaje de usuario no encontrado
const userNotFound = document.getElementById('userNotFound');

// Formulario de registro de tareas
const taskForm = document.getElementById('taskForm');

// Campos de la tarea
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskStatus = document.getElementById('taskStatus');

// Botón de registro de tarea
const taskBtn = document.getElementById('taskBtn');

// Errores de los campos de la tarea
const taskTitleError = document.getElementById('taskTitleError');
const taskDescriptionError = document.getElementById('taskDescriptionError');
const taskStatusError = document.getElementById('taskStatusError');

// Tbody de la tabla de tareas
const taskTableBody = document.getElementById('taskTableBody');

// Contador de tareas
const taskCount = document.getElementById('taskCount');

// Estado vacío de la tabla de tareas
const taskEmptyState = document.getElementById('taskEmptyState');

// Variable para guardar el usuario activo
let activeUserId = null;
let totalTasks = 0;



// ============================================
// 2. BÚSQUEDA DE USUARIO
// ============================================

function showUserData(user) {
    userContainer.innerHTML = '';

    const userCard = document.createElement('div');
    userCard.className = 'message-card';

    userCard.innerHTML = `
        <div class="message-card__header">
            <div class="message-card__user">
                <div class="message-card__avatar">${user.nombre.charAt(0).toUpperCase()}</div>
                <span class="message-card__username">${user.nombre}</span>
            </div>
            <span class="message-card__timestamp">ID: ${user.id}</span>
        </div>
        <div class="message-card__content">
            <p>👤 Nombre: ${user.nombre}</p>
            <p>📧 Email: ${user.email}</p>
            <p>🏙️ Ciudad: ${user.ciudad}</p>
        </div>
    `;

    userContainer.appendChild(userCard);
}

function clearUserData() {
    userContainer.innerHTML = '';
    userEmptyState.style.display = 'block';
    userNotFound.style.display = 'none';
}

function handleSearchSubmit(event) {
    event.preventDefault();

    const userId = userIdInput.value.trim();

    if (userId === '') {
        userIdError.textContent = 'El documento es obligatorio';
        userIdInput.classList.add('error');
        return;
    }

    userIdError.textContent = '';
    userIdInput.classList.remove('error');

    clearUserData();

    fetch('./server/db.json')
        .then(response => response.json())
        .then(data => {
            const user = data.busqueda_usuarios.find(u => u.id === userId);

            if (!user) {
                userNotFound.style.display = 'block';
                setTaskFormEnabled(false); // 👈 no encontrado, bloquear
                return;
            }

            userEmptyState.style.display = 'none';
            showUserData(user);
            activeUserId = user.id;
            setTaskFormEnabled(true);
        })
        .catch(error => {
        console.error('Error al cargar db.json:', error);
        userNotFound.style.display = 'block';
        setTaskFormEnabled(false); // error, bloquear
});
}

searchForm.addEventListener('submit', handleSearchSubmit);

userIdInput.addEventListener('input', function() {
    userIdError.textContent = '';
    userIdInput.classList.remove('error');
});


// ============================================
// 4. Habilitar formulario de tareas
// ============================================
function setTaskFormEnabled(enabled) {
    const taskInputs = document.querySelectorAll('#taskForm input, #taskForm button, #taskForm select, #taskForm textarea');
    taskInputs.forEach(el => el.disabled = !enabled);
}

setTaskFormEnabled(false);


// ============================================
// 5. Validación formulario de tareas
// ============================================

function validateTaskForm() {
    let isValid = true;

    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const status = document.getElementById('taskStatus').value;

    document.getElementById('taskTitleError').textContent = '';
    document.getElementById('taskDescriptionError').textContent = '';
    document.getElementById('taskStatusError').textContent = '';

    if (title === '') {
        document.getElementById('taskTitleError').textContent = 'El título es obligatorio';
        isValid = false;
    }

    if (description === '') {
        document.getElementById('taskDescriptionError').textContent = 'La descripción es obligatoria';
        isValid = false;
    }

    if (status === '') {
        document.getElementById('taskStatusError').textContent = 'El estado es obligatorio';
        isValid = false;
    }

    return isValid;
}

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateTaskForm()) return;
});

document.getElementById('taskTitle').addEventListener('input', () => {
    document.getElementById('taskTitleError').textContent = '';
});

document.getElementById('taskDescription').addEventListener('input', () => {
    document.getElementById('taskDescriptionError').textContent = '';
});

document.getElementById('taskStatus').addEventListener('change', () => {
    document.getElementById('taskStatusError').textContent = '';
});

// ============================================
// 6. REFLEXIÓN Y DOCUMENTACIÓN
// ============================================

/**
 * PREGUNTAS DE REFLEXIÓN:
 * 
 * 1. ¿Qué elemento del DOM estás seleccionando?
 *    R: 
 * 
 * 2. ¿Qué evento provoca el cambio en la página?
 *    R: 
 * 
 * 3. ¿Qué nuevo elemento se crea?
 *    R: 
 * 
 * 4. ¿Dónde se inserta ese elemento dentro del DOM?
 *    R: 
 * 
 * 5. ¿Qué ocurre en la página cada vez que repites la acción?
 *    R: 
 */


// ============================================
// 7. INICIALIZACIÓN (OPCIONAL)
// ============================================

/**
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM completamente cargado');
    console.log('📝 Aplicación de registro de mensajes iniciada');
    
    // Aquí puedes agregar cualquier inicialización adicional
    // Por ejemplo, cargar mensajes guardados del localStorage
});


// ============================================
// 8. FUNCIONALIDADES ADICIONALES (BONUS)
// ============================================

/**
 * RETOS ADICIONALES OPCIONALES:
 * 
 * 1. Agregar un botón para eliminar mensajes individuales
 * 2. Implementar localStorage para persistir los mensajes
 * 3. Agregar un contador de caracteres en el textarea
 * 4. Implementar un botón para limpiar todos los mensajes
 * 5. Agregar diferentes colores de avatar según el nombre del usuario
 * 6. Permitir editar mensajes existentes
 * 7. Agregar emojis o reacciones a los mensajes
 * 8. Implementar búsqueda/filtrado de mensajes
 */
