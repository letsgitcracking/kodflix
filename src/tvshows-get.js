import Bureau from './img/thebureau_cover.jpg';
import HighCastle from './img/manhighcastle_cover.jpg';
import HaltFire from './img/haltcatchfire_cover.jpg';
import JackRyan from './img/jackryan_cover.jpg';
import Robot from './img/mrrobot_cover.jpg';
import StrangerThings from './img/strangerthings_cover.jpg';

export default function getTVShows() {
    return [
        { id: 'maninthehighcastle', name: 'The Man in the High Castle', logo: HighCastle },
        { id: 'thebureau', name: 'The Bureau', logo: Bureau },
        { id: 'mrrobot', name: 'Mr. Robot', logo: Robot },
        { id: 'strangerthings', name: 'Stranger Things', logo: StrangerThings },
        { id: 'jackryan', name: 'Jack Ryan', logo: JackRyan },
        { id: 'haltandcatchfire', name: 'Halt and Catch Fire', logo: HaltFire }
    ];
}