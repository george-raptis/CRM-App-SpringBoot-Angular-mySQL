package com.georgeraptis.springboot.crmdemo.dao;

import com.georgeraptis.springboot.crmdemo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeDAO extends JpaRepository<Employee, Integer> {

}
