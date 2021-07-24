USE joseDB;

INSERT INTO department (name)
VALUES ("Accounting");
INSERT INTO department (name)
VALUES ("Adminstration");
INSERT INTO department (name)
VALUES ("House keeping");
INSERT INTO department (name)
VALUES ("Catering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 100000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Receptionist", 50000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Maid", 20000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Concierge", 25000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Cook", 25000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jennifer", "Williamson", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Declan", "McBride", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("George", "Jacobs", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maria", "Daily", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrea", "Jefferson", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Justin", "Brown", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "Yates", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christopher", "Michaels", 1, 2);