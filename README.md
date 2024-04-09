# [JSL08] Submission: Singleton Pattern for Bank Branch Management

# Solution
1. Define a class called `BankBranch` for managing branch information.
   - define the BankBranch class with a constructor that takes branchInfo as a parameter.
   - Inside the constructor, checked if the bankBranchInstance variable is null. If it is, created a new instance with the provided branchInfo and assigned it to bankBranchInstance.
   - return the bankBranchInstance whether it's newly created or existing.

2. Method to get branch information

   - added a method getBranchInfo to the BankBranch class to retrieve branch details.
3. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"

4. Create instance of the BankBranch class.
   - demonstrate creating two instances (branchA and branchB) and show that they both point to the same instance, ensuring that there is only one set of branch information throughout the application.

5. Get branch information.

6. Check if both instace are referring to the same object.