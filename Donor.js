class Donor{
    constructor(DonorId, FirstName, LastName, DateOfBirth, Address, ContactNumber, BloodGroup, Email, Password){
        this.DonorId = DonorId;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = DateOfBirth;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
        this.BloodGroup = BloodGroup;
        this.Email = Email;
        this.Password = Password;
    }
}

module.exports = Donor;