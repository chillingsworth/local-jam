import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type JamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AreaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Jam {
  readonly id: string;
  readonly jam?: string;
  readonly areaID?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Jam, JamMetaData>);
  static copyOf(source: Jam, mutator: (draft: MutableModel<Jam, JamMetaData>) => MutableModel<Jam, JamMetaData> | void): Jam;
}

export declare class Area {
  readonly id: string;
  readonly zip?: string;
  readonly Jams?: (Jam | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Area, AreaMetaData>);
  static copyOf(source: Area, mutator: (draft: MutableModel<Area, AreaMetaData>) => MutableModel<Area, AreaMetaData> | void): Area;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly Jams?: (Jam | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}