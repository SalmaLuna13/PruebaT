using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Fractales
{
    public partial class Form1 : Form
    {        
        Bitmap bmp;
        int W, H;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Graphics g;
            W = pctbLienzo.Width;
            H = pctbLienzo.Height;
            bmp = new Bitmap(W, H);
            g = Graphics.FromImage(bmp);
            g.Clear(Color.White);
            g = Alfombra(g, 50, 50, 550, 5);
            pctbLienzo.Image = bmp;
        }


        private Graphics Alfombra(Graphics g, int x, int y, int s, int n)
        {
            SolidBrush sb1 = new SolidBrush(Color.Purple);
            SolidBrush sb2 = new SolidBrush(Color.White);
            int a = s / 3;
            if (n == 0) // Caso Base
            {
                g.FillRectangle(sb1, x, y, s, s);
                g.FillRectangle(sb2, x + a, y + a, a, a);
            } else // Caso recursivo
            {
                n--;
                g = Alfombra(g, x, y, a, n);
                g = Alfombra(g, x+a, y, a, n);
                g = Alfombra(g, x+a*2, y, a, n);
                g = Alfombra(g, x, y+a, a, n);
                g = Alfombra(g, x+a*2, y+a, a, n);
                g = Alfombra(g, x, y+a*2, a, n);
                g = Alfombra(g, x+a, y+a*2, a, n);
                g = Alfombra(g, x+a*2, y+a*2, a, n);

            }
            return g;
        }
        
    }
}
