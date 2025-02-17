import TodoPage from '../support/objects/Tareas';

describe('Pruebas Métodos', () => {
  const todoPage = new TodoPage();


  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/');
  });



  it('Añadir tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
  })


  it('Borrar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.borrarTarea('Hacer la compra')
  })


  it('Marcar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.marcarTarea('Hacer la compra')
  })
})