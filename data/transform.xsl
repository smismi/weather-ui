<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="text"/>

	<xsl:template match="/forecast">
		<xsl:text>[</xsl:text>
		<xsl:for-each select="town">

			<xsl:text>{</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="'id'"/>
			<xsl:text>"</xsl:text>

			<xsl:text> : </xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="@id"/>
			<xsl:text>"</xsl:text>

			<xsl:text>,</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="'name'"/>
			<xsl:text>"</xsl:text>

			<xsl:text>:</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="@name"/>
			<xsl:text>"</xsl:text>


			<xsl:text>,</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="'country'"/>
			<xsl:text>"</xsl:text>

			<xsl:text>:</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="@country"/>
			<xsl:text>"</xsl:text>

			<xsl:text>,</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="'region'"/>
			<xsl:text>"</xsl:text>

			<xsl:text>:</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="@region"/>
			<xsl:text>"</xsl:text>

			<xsl:text>,</xsl:text>

			<xsl:text>"</xsl:text>
			<xsl:value-of select="'days'"/>
			<xsl:text>"</xsl:text>

			<xsl:text>:</xsl:text>


			<xsl:text>[</xsl:text>
					<xsl:for-each select="date">



						<xsl:text>{</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'date'"/>
						<xsl:text>"</xsl:text>

						<xsl:text>:</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="@day"/>
						<xsl:text>"</xsl:text>

						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'tmax'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="tmax"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'tmin'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="tmin"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'prec'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="prec"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'prec_prob'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="prec_prob"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'wind_dir'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="wind_dir"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'windspeed'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="windspeed"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'weather_conditions'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="weather_conditions"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'pday'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="pday"/>
						<xsl:text>"</xsl:text>
						<xsl:text>,</xsl:text>

						<xsl:text>"</xsl:text>
						<xsl:value-of select="'pnight'"/>
						<xsl:text>":</xsl:text>
						<xsl:text>"</xsl:text>
						<xsl:value-of select="pnight"/>
						<xsl:text>"</xsl:text>


						<xsl:text>}</xsl:text>
						<xsl:if test="position() != last()">
							<xsl:text>,</xsl:text>
						</xsl:if>

					</xsl:for-each>

				<xsl:text>]</xsl:text>

				<xsl:text>}</xsl:text>
				<xsl:if test="position() != last()">
					<xsl:text>,</xsl:text>
				</xsl:if>
			</xsl:for-each>
		<xsl:text>]</xsl:text>
		<xsl:if test="position() != last()">
			<xsl:text>,</xsl:text>
		</xsl:if>
	</xsl:template>

</xsl:stylesheet>