// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo



// Define a class called `BankBranch` for managing branch information.
class BankBranch {
    constructor(branchInfo) {  //define the BankBranch class with a constructor that takes branchInfo as a parameter.
        if (!BankBranch.BankBranchInstance) { //Inside the constructor, checked if the bankBranchInstance variable is null. If it is, created a new instance with the provided branchInfo and assigned it to bankBranchInstance.
            this.branchInfo = branchInfo;
            BankBranch.BankBranchInstance = this;
        }
        return BankBranch.BankBranchInstance;  //return the bankBranchInstance whether it's newly created or existing.
    }
    //method to get branch information
    getBranchInfo() {  //added a method getBranchInfo to the BankBranch class to retrieve branch details.
        return this.branchInfo;
    }
}

//Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"

BankBranch.BankBranchInstance = null; 

//usage
//create instance of the BankBranch class
//demonstrate creating two instances (branchA and branchB) and show that they both point to the same instance, ensuring that there is only one set of branch information throughout the application.
const branchA = new BankBranch("Branch A Information");
const branchB = new BankBranch("Branch B Information");

//get branch information
console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());

//check if both instace are referring to the same object
console.log(branchA === branchB);
