import { Component } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import Auth from './components/Auth';
import { auth, logout } from './firebase/auth';

class App extends Component {
  state: { loading: boolean; user: User | null } = {
    loading: true,
    user: null,
  };

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        loading: false,
        user: user,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading</div>;
    }

    return (
      <div>
        Username: {this.state.user && this.state.user.displayName}
        {this.state.user ? <button onClick={logout}>Logout</button> : <Auth />}
      </div>
    );
  }
}

export default App;
