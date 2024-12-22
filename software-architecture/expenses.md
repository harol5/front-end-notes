# Expenses tracker app

## Motivation

I personally struggle every month trying to figure out how much money I will have left after paying all my expences or
how much Im spending every month, that's why I took this problem as a good opportunity to learn technologies that I always
wanted to learn. At a first glance the architecture and components might seem a bit over-engineered, but as I mentioned
previously, the idea is to learn new things.

## Requirements

### funtional

- USER authentication and authorization
- read, create, update, and delete USERS
- read, create, update, and delete EXPENSES
- read, create, update, and delete INCOMES
- display EXPENSES in a chronological format
- send NOTIFICATIONS to USERS about upcoming EXPENSES
- create analytics comparing EXPENSES vs INCOME (how much money left after paying all expenses with current payroll)
- share your expenses with others (only read operations)

### non-funtional

- performance (distribute work between services)
- availability (fall-tolerance)
- security (vulnerabilities)
- scalability

## System Architecture

It will be a Distributed system with the following sub-systems (services):

### Notification system

It will take care of sending upcoming payments and keep track of each expences upcoming payment.

### Analitics system

It will use the data available to make calculations and estimation.

### chronological system

it will keep track of all expences across time. making sure to calculate which expences are comming
and which ones were already paid.

## Tech Stack

### backend

- java
- springboot (microservices)
- gRPC for service communication
- rabbitMQ or Kaftka decoupling services and asynchronius operations
- postgresql
- docker
- kubernetes
- prometheus

### frontend

- nextJs (SSR or SPA or SSG).
