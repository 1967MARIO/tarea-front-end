import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { loginStart, loginSuccess, loginFailure, logout } from '../store/slices/authSlice';
import { User } from '../types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    dispatch(loginStart());
    
    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          avatar: `https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100`
        };
        dispatch(loginSuccess(mockUser));
      } else {
        dispatch(loginFailure());
      }
    }, 1000);
  };

  const register = async (name: string, email: string, password: string) => {
    dispatch(loginStart());
    
    // Simulate API call
    setTimeout(() => {
      if (name && email && password) {
        const mockUser: User = {
          id: Date.now().toString(),
          email,
          name,
          avatar: `https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100`
        };
        dispatch(loginSuccess(mockUser));
      } else {
        dispatch(loginFailure());
      }
    }, 1000);
  };

  const signOut = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout: signOut,
  };
};