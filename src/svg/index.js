import Chat from './Chat.svg';
import Explore from './Explore.svg';
import Home from './Home.svg';
import Like from './Like.svg';

const Empty = () => <div>empty</div>;

export const ChatIcon = Chat?.name !== 'SvgChat' ? Empty : Chat;
export const HomeIcon = Home?.name !== 'SvgHome' ? Empty : Home;
export const ExploreIcon = Explore?.name !== 'SvgExplore' ? Empty : Explore;
export const LikeIcon = Like?.name !== 'SvgLike' ? Empty : Like;
