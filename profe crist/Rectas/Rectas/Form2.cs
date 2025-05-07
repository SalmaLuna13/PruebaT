using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Rectas
{
    public partial class Form2 : Form
    {


        public Form2()
        {
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            double[,] A = { {1, 2}, {3, 4}, {5, 6} };
            double[,] B = { {1, 2, 3}, {3, 4, 5} };

            double[,] R = Multimat(A, B);

            for(int i=0; i<R.GetLength(0); i++)
            {
                for(int j=0; j<R.GetLength(1); j++)
                {
                    Console.Write(R[i, j] + "\t");
                }
                Console.WriteLine();
            }
        }

        private double[,] Multimat(double[,] A, double[,] B)
        {
            double[,] R;
            int fA, cA, fB, cB;
            int i, j, k;
            double suma;

            fA = A.GetLength(0);
            cA = A.GetLength(1);
            fB = B.GetLength(0);
            cB = B.GetLength(1);
            if (cA == fB)
            {
                R = new double[fA, cB];
                for (i = 0; i < fA; i++)
                {
                    for (j = 0; j < cB; j++)
                    {
                        suma = 0.0;
                        for (k = 0; k < cA; k++)
                        {
                            //Console.WriteLine(i + "," + j + "," + k);
                            //Console.Write(A[i, k] + "*" + B[k, j]+" -> ");
                            suma += A[i, k] * B[k, j];                            
                        }
                        //Console.WriteLine();
                        R[i, j] = suma;
                    }
                }
            }
            else
                R = new double[1, 1];
             
            return R;
        }


    }
}
