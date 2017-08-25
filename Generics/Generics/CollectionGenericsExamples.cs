using System;
using System.Collections.Generic;

namespace Generics
{
    public static class CollectionGenericsExamples
    {
        public static void OldGenericsExamplesRun()
        {

            Console.WriteLine("***********Int Type List*********");
            List<int> myInts = new List<int>();
            myInts.Add(1);
            myInts.Add(2);
            myInts.Add(3);
            for (int i = 0; i < myInts.Count; i++)
            {
                Console.WriteLine("My Ints List: {0}", myInts[i]);
            }



            Console.WriteLine("\n***********String Type List*********");
            List<string> mystrings = new List<string>();
            mystrings.Add("MBSTU-1");
            mystrings.Add("MBSTU-2");
            mystrings.Add("MBSTU-3");
            for (int i = 0; i < mystrings.Count; i++)
            {
                Console.WriteLine("Mystrings: {0}", mystrings[i]);
            }


            Console.WriteLine("\n***********Customer Type List*********");
            Dictionary<int, Customer> customers = new Dictionary<int, Customer>();

            Customer cust1 = new Customer(1, "Customer 1");
            Customer cust2 = new Customer(2, "Customer 2");
            Customer cust3 = new Customer(3, "Customer 3");

            customers.Add(cust1.ID, cust1);
            customers.Add(cust2.ID, cust2);
            customers.Add(cust3.ID, cust3);

            foreach (KeyValuePair<int, Customer> custKeyVal in customers)
            {
                Console.WriteLine("Customer ID: {0}, Name: {1}", custKeyVal.Key, custKeyVal.Value.Name);
            }



            Console.WriteLine("\n***********Boolean Type List*********");
            List<bool> mybool = new List<bool>();
            mybool.Add(false);
            mybool.Add(true);
            mybool.Add(true);
            mybool.Add(false);

            foreach (bool booleans in mybool)
            {
                Console.WriteLine(booleans);
            }
            Console.WriteLine("Count -> {0}", mybool.Count);


        }
    }



    public class Customer
    {
        public Customer(int id, string name)
        {
            ID = id;
            Name = name;
        }

        private int m_id;

        public int ID
        {
            get { return m_id; }
            set { m_id = value; }
        }

        private string m_name;

        public string Name
        {
            get { return m_name; }
            set { m_name = value; }
        }
    }
}
