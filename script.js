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
            <p>👤 ${user.nombre}</p>
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
                return;
            }

            userEmptyState.style.display = 'none';
            showUserData(user);
            activeUserId = user.id;
        })
        .catch(error => {
            console.error('Error al cargar db.json:', error);
            userNotFound.style.display = 'block';
        });
}

searchForm.addEventListener('submit', handleSearchSubmit);

userIdInput.addEventListener('input', function() {
    userIdError.textContent = '';
    userIdInput.classList.remove('error');
});



// ============================================
// 3. CREACIÓN DE ELEMENTOS
// ============================================

/**
 * Crea un nuevo elemento de mensaje en el DOM
 * @param {string} userName - Nombre del usuario
 * @param {string} message - Contenido del mensaje
 */
function createMessageElement(userName, message) {
    // TODO: Implementar la creación de un nuevo mensaje
    
    // PASO 1: Crear el contenedor principal del mensaje
    // Pista: document.createElement('div')
    // Asignar la clase 'message-card'
    
    // PASO 2: Crear la estructura HTML del mensaje
    // Puedes usar innerHTML con la siguiente estructura:
    /*
    <div class="message-card__header">
        <div class="message-card__user">
            <div class="message-card__avatar">[INICIALES]</div>
            <span class="message-card__username">[NOMBRE]</span>
        </div>
        <span class="message-card__timestamp">[FECHA]</span>
    </div>
    <div class="message-card__content">[MENSAJE]</div>
    */
    
    // PASO 3: Insertar el nuevo elemento en el contenedor de mensajes
    // Pista: messagesContainer.appendChild(nuevoElemento)
    // O usar insertBefore para agregarlo al principio
    
    // PASO 4: Incrementar el contador de mensajes
    
    // PASO 5: Actualizar el contador visual
    
    // PASO 6: Ocultar el estado vacío si está visible
}


// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

/**
 * Maneja el evento de envío del formulario
 * @param {Event} event - Evento del formulario
 */
function handleFormSubmit(event) {
    // TODO: Implementar el manejador del evento submit
    
    // PASO 1: Prevenir el comportamiento por defecto del formulario
    // Pista: event.preventDefault()
    
    // PASO 2: Validar el formulario
    // Si no es válido, detener la ejecución (return)
    
    // PASO 3: Obtener los valores de los campos
    
    // PASO 4: Crear el nuevo elemento de mensaje
    // Llamar a createMessageElement con los valores obtenidos
    
    // PASO 5: Limpiar el formulario
    // Pista: messageForm.reset()
    
    // PASO 6: Limpiar los errores
    
    // PASO 7: Opcional - Enfocar el primer campo para facilitar agregar otro mensaje
    // Pista: userNameInput.focus()
}

/**
 * Limpia los errores cuando el usuario empieza a escribir
 */
function handleInputChange() {
    // TODO: Implementar limpieza de errores al escribir
    // Esta función se ejecuta cuando el usuario escribe en un campo
    // Debe limpiar el error de ese campo específico
}


// ============================================
// 5. REGISTRO DE EVENTOS
// ============================================

/**
 * Aquí registramos todos los event listeners
 */

// TODO: Registrar el evento 'submit' en el formulario
// Pista: messageForm.addEventListener('submit', handleFormSubmit);

// TODO: Registrar eventos 'input' en los campos para limpiar errores al escribir
// Pista: userNameInput.addEventListener('input', handleInputChange);
// Pista: userMessageInput.addEventListener('input', handleInputChange);


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
