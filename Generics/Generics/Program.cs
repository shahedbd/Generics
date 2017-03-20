using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


//Generic
//generics allow you to write a class or method that can work with any data type.

//Arrays are good for many tasks, but C# v2.0 introduced a new feature called generics. 
//Among many benefits, one huge benefit is that generics allow us to create collections 
//that allow us to do more than allowed by an array. 



namespace Generics
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> myInts = new List<int>();

            myInts.Add(1);
            myInts.Add(2);
            myInts.Add(3);

            for (int i = 0; i < myInts.Count; i++)
            {
                Console.WriteLine("MyInts: {0}", myInts[i]);                
            }

            Console.WriteLine("End My Int");

            List<string> mystrings = new List<string>();

            mystrings.Add("Shahed-1");
            mystrings.Add("Shahed-2");
            mystrings.Add("Shahed-3");

            for (int i = 0; i < mystrings.Count; i++)
            {
                Console.WriteLine("Mystrings: {0}", mystrings[i]);
            }
           

            Console.WriteLine("End My String");



            Dictionary<int, Customer> customers = new Dictionary<int, Customer>();

            Customer cust1 = new Customer(1, "Cust 1");
            Customer cust2 = new Customer(2, "Cust 2");
            Customer cust3 = new Customer(3, "Cust 3");

            customers.Add(cust1.ID, cust1);
            customers.Add(cust2.ID, cust2);
            customers.Add(cust3.ID, cust3);

            foreach (KeyValuePair<int, Customer> custKeyVal in customers)
            {
                Console.WriteLine(
                    "Customer ID: {0}, Name: {1}",
                    custKeyVal.Key,
                    custKeyVal.Value.Name);
            }



            //***************************************************************
            List<int> list = new List<int>();

            list.Add(1);
            list.Add(2);
            list.Add(9);

            foreach (int numbers in list)
            {
                Console.WriteLine(numbers);
            }

            Console.WriteLine("Count -> {0}", list.Count);
            Console.WriteLine("\n-------------------------------------------\n");

            List<bool> list1 = new List<bool>();

            list1.Add(false);
            list1.Add(true);
            list1.Add(true);
            list1.Add(false);

            foreach (bool booleans in list1)
            {
                Console.WriteLine(booleans);
            }

            Console.WriteLine("Count -> {0}", list1.Count);
            Console.WriteLine("\n-------------------------------------------\n");

            List<string> list2 = new List<string>();

            list2.Add("Khadak");
            list2.Add("Shiv");
            list2.Add("Shaam");
            list2.Add("Pradeep Dhuri");

            foreach (string stringnames in list2)
            {
                Console.WriteLine(stringnames);
            }

            Console.WriteLine("Count -> {0}", list2.Count);

            Console.WriteLine("\n-------------------------------------------\n");





            Console.ReadKey();
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
