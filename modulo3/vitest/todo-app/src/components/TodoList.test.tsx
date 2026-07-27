// src/components/TodoList.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, logRoles} from '@testing-library/react';
import { TodoList } from './TodoList';
import type { Todo } from '../types';
import { LoginForm } from './LoginForm';

const tareas: Todo[] = [
  { id: '1', text: 'Comprar pan', titulo: 'Tarea comprar tarea',completed: false },
  { id: '2', text: 'Lavar el coche', titulo: 'Tarea lavar el coche',completed: true },
  { id: '3', text: 'Estudiar Vitest', titulo: 'Tarea estudio',completed: false },
];

describe('TodoList · queries', () => {
  it('debería renderizar un listitem por cada tarea (getAllByRole)', () => {
    // Arrange
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    // Act + Assert: tres tareas → tres elementos de lista
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  it('debería encontrar la lista por su aria-label', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole('list', { name: 'Lista de tareas' }),
    ).toBeInTheDocument();
  });

  it('debería mostrar el estado vacío cuando no hay tareas', () => {
    // Arrange: lista vacía
    render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
    // Assert: aparece el mensaje y NO hay listitems
    expect(screen.getByText('No hay tareas pendientes')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('debería mostrar el texto de una tarea concreta', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Lavar el coche')).toBeInTheDocument();
  });

  it('inspecciona el DOM y los roles', () => {
  const { container } = render(<LoginForm onLogin={() => {}} />);

  // Imprime TODO el HTML renderizado en consola
  screen.debug();

  // Imprime solo un nodo (más enfocado)
  screen.debug(screen.getByRole('button', { name: 'Entrar' }));

  // Lista todos los roles y sus nombres accesibles
  logRoles(container);
  });

});