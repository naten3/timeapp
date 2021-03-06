package com.natenelles.timeapp.service.intf;

import com.natenelles.timeapp.exception.ResourceNotFoundException;
import com.natenelles.timeapp.model.UserCreateRequest;
import com.natenelles.timeapp.model.UserResponse;
import com.natenelles.timeapp.entity.User;
import com.natenelles.timeapp.model.UserUpdateRequest;
import com.natenelles.timeapp.model.errors.UserSaveError;
import com.natenelles.timeapp.model.users.SignupInvite;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;
import java.util.Set;

public interface UserService {
  Optional<UserResponse> getUser(long id);

  Optional<User> getByUsername(String username);

  Optional<User> getSecurityUser(String username);

  Page<UserResponse> getAllNonadminUsers(Pageable pageable);

  Set<UserSaveError> createUser(UserCreateRequest ucr);

  UserResponse updateUser(long userId, UserUpdateRequest uur) throws ResourceNotFoundException;

  boolean isUsernameAvailable(String username);

  boolean isEmailAvailable(String email);

  void deleteUser(long id);

  boolean verifyEmail(long userId, String token);

  /**
   * @return true if the invite was successful or false if the email is taken;
   */
  boolean inviteUser(SignupInvite signupInvite);

  Optional<SignupInvite> getSignupInvite(String token);
}
