import { Molecule } from '../../complect/atoms';
import { RouterState } from './Router.model';

const defData = {};
const def = { net: [] };

export const routerMolecule = new Molecule<RouterState>(
  {
    'admin.data': defData,
    'bible.data': defData,
    'cm.data': defData,
    'gamer.data': defData,
    'index.data': defData,
    'leader.data': defData,
    'tuner.data': defData,
    'wed.data': defData,

    admin: def,
    bible: def,
    cm: def,
    gamer: def,
    index: def,
    leader: def,
    tuner: def,
    wed: def,
  },
  'router',
);
