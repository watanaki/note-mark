import { contextBridge } from 'electron';

if (!process.contextIsolated) throw new Error('contextIsolation is must be enabled!');

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  });
} catch (error) {
  console.error(error);
}
