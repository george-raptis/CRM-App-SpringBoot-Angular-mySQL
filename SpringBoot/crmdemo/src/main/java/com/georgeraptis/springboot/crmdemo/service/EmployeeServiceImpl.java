package com.georgeraptis.springboot.crmdemo.service;

import com.georgeraptis.springboot.crmdemo.dao.EmployeeDAO;
import com.georgeraptis.springboot.crmdemo.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeDAO employeeDAO;

    public EmployeeServiceImpl(EmployeeDAO theEmployeeDAO) {
        employeeDAO = theEmployeeDAO;
    }

    @Override
    public List<Employee> findAll() {
        return employeeDAO.findAll();
    }

    @Override
    public Employee findById(int id) {

        Optional<Employee> result = employeeDAO.findById(id);

        Employee employee = null;

        if (result.isPresent()) {
            employee = result.get();
        } else {
            throw new RuntimeException("user not found id: " + id);
        }
        return employee;
    }

    @Override
    public void save(Employee theEmployee) {
        employeeDAO.save(theEmployee);
    }

    @Override
    public void deleteById(int theId) {
        employeeDAO.deleteById(theId);
    }
}
