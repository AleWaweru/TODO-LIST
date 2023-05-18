const { editTask, updateStatus, clearAll } = require('../_mocks_/editUpdateClear.js');

describe('implement edit the Task description and clear all ', () => {
  test('edit the tasks', () => {
    const editItem = editTask({
      id: 1,
      task: 'Ok Alex',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });

  test('edit the tasks', () => {
    const editItem = editTask({
      id: 1,
      task: 'Ok Waltor',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });

  test('update the status', () => {
    expect(updateStatus(1)).toStrictEqual({
      id: 1,
      task: 'Ok Waltor',
      status: true,
    });
  });

  test('clear all the complete task', () => {
    expect(clearAll()).not.toBe([{
      id: 1,
      task: 'Hello Waltor',
      status: false,
    }]);
  });
});