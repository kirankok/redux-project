import { combineReducers } from 'redux';
import albumsReducer from './albums';
import artistsReducer from './artists';
import playlistReducer from './playlist';

export const reducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlist: playlistReducer
})
