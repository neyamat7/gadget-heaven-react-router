import { useLoaderData } from "react-router";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="bg-purple-600 py-12">
        <div className="text-center">
          <h1 className="text-white text-3xl lg:text-4xl w-[90%] md:w-4/5 mx-auto font-bold pt-12">
            Statistics
          </h1>
          <p className="text-base w-4/5 md:w-3/5 mx-auto text-white mt-10">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-2xl my-5 font-semibold mb-7">Wishlist</h2>

        <div>
          <div className="w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis
                  dataKey="product_title"
                  scale="band"
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="total" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="price" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
