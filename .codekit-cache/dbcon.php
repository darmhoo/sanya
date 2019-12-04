<HTML>
<?php
$db = mysql_connect("localhost", "root", "");
mysql_select_db("learndb",$db);
$result = mysql_query("SELECT * FROM personnel",$db);
echo "<TABLE>";
echo"<TR><TD><B>Full Name</B><TD><B>Nick Name</B><TD><B>Salary</B></TR>";
while ($myrow = mysql_fetch_array($result))
{
echo "<TR><TD>";
echo $myrow["firstname"];
echo " ";
echo $myrow["lastname"];
echo "<TD>";
echo $myrow["nick"];
echo "<TD>";
echo $myrow["salary"];
}
echo "</TABLE>";
?>
</HTML>
