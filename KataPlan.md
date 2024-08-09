# MVP Goal

* Create a Katcha for a number treasure hunt
* Create a clear goal for users
* Write the tests 


## Personal Plan 

1. Intitlise NPM ✅
2. Install Vitest ✅
3. Setup NPM test script ✅
4. Plan Kata see KataPlan.md✅
5. Describe the problem✅
6. Write the scenario and skeleton function in main.js✅
7. Add temperory solution to verify test in main.js✅
8. run npm test to verify they work✅
9. After verifying tests work remove solution code from main.js✅
10. Share Kata and make public✅


### Example decision table, Refer to this for potetial object returns

+----------+------------------+--------------+--------------------------------------------------------+
| Input    | Expected Outcome | Expected Sum | 
+----------+------------------+--------------+--------------------------------------------------------+
| "a1b2c3" | treasure_found   | 6            |    |
+----------+------------------+--------------+--------------------------------------------------------+
|"12a34b56"| treasure_found   | 102          |  |
+----------+------------------+--------------+--------------------------------------------------------+
| "abcdef" | no_treasure      | 0            |                 |
+----------+------------------+--------------+--------------------------------------------------------+
| ""       | no_treasure      | 0            |                   |
+----------+------------------+--------------+--------------------------------------------------------+
| "a0b0c0" | treasure_found   | 0                 |
+----------+------------------+--------------+--------------------------------------------------------+
| "100a200"| treasure_found   | 300         
+
| "0"      | treasure_found   | 0            |  |
+----------+------------------+--------------+--------------------------------------------------------+


