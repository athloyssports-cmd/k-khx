import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const studentsData = [
  { month: "Jan", speed: 55, strength: 60, coordination: 65, endurance: 58 },
  { month: "Feb", speed: 58, strength: 62, coordination: 68, endurance: 60 },
  { month: "Mar", speed: 62, strength: 65, coordination: 72, endurance: 63 },
  { month: "Apr", speed: 65, strength: 68, coordination: 75, endurance: 66 },
];

const sportsRecommendation = (krf) => {
  if (krf > 80) return "Athletics (Sprinting)";
  if (krf > 70) return "Football / Basketball";
  if (krf > 60) return "Cricket / Tennis";
  return "General Fitness & Training";
};

export default function Dashboard() {
  const [krf, setKRF] = useState(68);
  const [studentName, setStudentName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [scores, setScores] = useState({ speed: "", strength: "", coordination: "", endurance: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🏆 Student Performance Dashboard</h1>
      
      {/* Teacher Entry Portal */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">📝 Teacher Entry Portal</h2>
          <Input placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="mt-2" />
          <Input placeholder="Age Group" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className="mt-2" />
          <Input name="speed" placeholder="Speed Score" value={scores.speed} onChange={handleInputChange} className="mt-2" />
          <Input name="strength" placeholder="Strength Score" value={scores.strength} onChange={handleInputChange} className="mt-2" />
          <Input name="coordination" placeholder="Coordination Score" value={scores.coordination} onChange={handleInputChange} className="mt-2" />
          <Input name="endurance" placeholder="Endurance Score" value={scores.endurance} onChange={handleInputChange} className="mt-2" />
          <Button className="mt-4">Submit Scores</Button>
        </CardContent>
      </Card>
      
      {/* Performance Trends */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">📊 Performance Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="speed" stroke="#8884d8" />
              <Line type="monotone" dataKey="strength" stroke="#82ca9d" />
              <Line type="monotone" dataKey="coordination" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Student Report */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">📌 Student Report</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Speed & Agility</TableCell>
                <TableCell>67</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Strength & Power</TableCell>
                <TableCell>70</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Coordination</TableCell>
                <TableCell>72</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Endurance</TableCell>
                <TableCell>65</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Final KRF Score</TableCell>
                <TableCell className="font-bold">{krf}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Sports Recommendation */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">🎯 Sports Recommendation</h2>
          <p className="text-xl font-bold text-blue-600">{sportsRecommendation(krf)}</p>
          <Button className="mt-4" onClick={() => setKRF(krf + 5)}>Simulate Growth 📈</Button>
        </CardContent>
      </Card>
    </div>
  );
}
