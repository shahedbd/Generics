namespace Generics
{
    public static class GenericMethods
    {


        public static void GenericMethodsRun()
        {
            //Swap
            int a = 1, b = 2;
            Swap<int>(ref a, ref b);
            System.Console.WriteLine(a + " " + b);


        }

        public static void Swap<T>(ref T lhs, ref T rhs)
        {
            T temp;
            temp = lhs;
            lhs = rhs;
            rhs = temp;
        }

    }
}
