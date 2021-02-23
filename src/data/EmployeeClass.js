export class EmployeeClass {
  constructor(
    full_name,
    email,
    role,
    date_of_birth,
    language,
    city,
    province,
    country,
    personal_phone,
    emergency_contact,
    mailing_address,
    physical_address,
    start_date,
    status,
    department
  ) {
    this.full_name = full_name;
    this.email = email;
    this.role = role;
    this.date_of_birth = date_of_birth;
    this.language = language;
    this.city = city;
    this.province = province;
    this.country = country;
    this.mailing_address = mailing_address;
    this.personal_phone = personal_phone;
    this.emergency_contact = emergency_contact;
    this.physical_address = physical_address;
    this.start_date = start_date;
    this.status = status;
    this.department = department;
  }
}

// Firestore data converter
export let EmployeeClassConverter = {
  toFirestore: function (EmployeeClass) {
    return {
      full_name: EmployeeClass.full_name,
      email: EmployeeClass.email,
      role: EmployeeClass.role,
      date_of_birth: EmployeeClass.date_of_birth,
      language: EmployeeClass.language,
      city: EmployeeClass.city,
      province: EmployeeClass.province,
      country: EmployeeClass.country,
      personal_phone: EmployeeClass.personal_phone,
      emergency_contact: EmployeeClass.emergency_contact,
      mailing_address: EmployeeClass.mailing_address,
      physical_address: EmployeeClass.physical_address,
      start_date: EmployeeClass.start_date,
      status: EmployeeClass.status,
      department: EmployeeClass.department,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new EmployeeClass(
      data.full_name,
      data.email,
      data.role,
      data.date_of_birth,
      data.language,
      data.city,
      data.province,
      data.country,
      data.personal_phone,
      data.emergency_contact,
      data.mailing_address,
      data.physical_address,
      data.start_date,
      data.status,
      data.department
    );
  },
};
