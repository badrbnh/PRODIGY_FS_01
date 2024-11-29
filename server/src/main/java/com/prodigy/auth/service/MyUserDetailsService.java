package com.prodigy.auth.service;

import com.prodigy.auth.model.User;
import com.prodigy.auth.model.UserPrincipal;
import com.prodigy.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author badreddine
 **/


@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if (user==null){
            throw new UsernameNotFoundException("User 404");
        }
        return new UserPrincipal(user);
    }

}
