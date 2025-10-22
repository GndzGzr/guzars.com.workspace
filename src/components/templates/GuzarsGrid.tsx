import { MoleculeEightPartGrid, MoleculeThreePartGrid } from "../molecule/MoleculeGrid";
import { TimeLineGrid } from "../organism/OrganismGrid";

const Grids = {
    AboutTimeLine: TimeLineGrid,
    AboutStory: {
        AboutToday: MoleculeEightPartGrid,
        AboutGraduation: MoleculeEightPartGrid,
        AboutLateUniversity: MoleculeEightPartGrid,
        AboutEarlyUniversity: MoleculeEightPartGrid,
        AboutCollege: MoleculeEightPartGrid,
        AboutChildhood: MoleculeEightPartGrid,
    },

}

export { Grids };