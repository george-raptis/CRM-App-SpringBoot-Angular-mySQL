package com.georgeraptis.springboot.crmdemo.dao;

import com.georgeraptis.springboot.crmdemo.entity.Employee;

import java.util.List;

public interface EmployeeDAO {

    public List<Employee> findAll();

    public Employee findById(int theId);

    public void add(Employee theEmployee);

    public void deleteById(int theId);
}
