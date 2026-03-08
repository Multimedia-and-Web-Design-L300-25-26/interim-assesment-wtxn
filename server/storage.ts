export interface IStorage {
  // Empty storage since this is a frontend clone
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
