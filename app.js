const columns = [
  ['todo', 'Cần làm'],
  ['doing', 'Đang làm'],
  ['done', 'Hoàn tất'],
];
const initialTasks = [
  { id: 1, title: 'Viết requirement', status: 'todo' },
  { id: 2, title: 'Thiết kế UI', status: 'doing' },
  { id: 3, title: 'Tạo GitHub Issues', status: 'done' },
];
let tasks = JSON.parse(localStorage.getItem('ai-wf-tasks')) || initialTasks;

function save() { localStorage.setItem('ai-wf-tasks', JSON.stringify(tasks)); }
function render() {
  const board = document.querySelector('#tasks');
  board.innerHTML = '';
  columns.forEach(([status, label], index) => {
    const column = document.createElement('section');
    column.className = 'column';
    column.innerHTML = `<h2>${label}</h2>`;
    tasks.filter(task => task.status === status).forEach(task => {
      const card = document.querySelector('#card-template').content.cloneNode(true);
      card.querySelector('.card-title').textContent = task.title;
      const move = card.querySelector('.move');
      move.hidden = status === 'done';
      move.onclick = () => { task.status = columns[index + 1][0]; save(); render(); };
      card.querySelector('.delete').onclick = () => { tasks = tasks.filter(item => item.id !== task.id); save(); render(); };
      column.append(card);
    });
    board.append(column);
  });
}

document.querySelector('#task-form').onsubmit = event => {
  event.preventDefault();
  const input = document.querySelector('#task-input');
  tasks.push({ id: Date.now(), title: input.value.trim(), status: 'todo' });
  input.value = ''; save(); render();
};
render();
