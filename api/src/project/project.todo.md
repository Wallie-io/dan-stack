- [ ] inside the main repo app/models/Job.ts many things happen in the pre-save pre-remove hooks
  - [ ] remove todos, recurring invoices, boards, alerts, appointments, workflows,
        assignments, scheduler groups
  - [ ] if the state or end date is modified, find all job forms that aren't completed
        then change their new form.expiryDate & createFormReminders for them
- [ ] the mongoose model has a reference to contract & invoice; we need to migrate contracts to
      not live directly on the project
