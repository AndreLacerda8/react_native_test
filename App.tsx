import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AuthNavigation } from './navigations/AuthNavigation'
import { betsReducer } from './store/reducers/bets'
import { gamesReducer } from './store/reducers/games'
import { userReducer } from './store/reducers/user'

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  bets: betsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <AuthNavigation />
    </Provider>
  );
}
