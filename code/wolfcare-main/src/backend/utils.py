"""
This file holds the entire database related configuration and fucntions
"""
import ast
import re
import mysql.connector
from ast import literal_eval as make_tuple
from src.backend.dbconfig import constants
import datetime

try:
    connection = mysql.connector.connect(
        host=constants["host"], user=constants["user"], password=constants["password"], database=constants["database"])
except:
    pass


def getAfiiliationByDoctor(ID):
    """
    Gets all affiliated hospitals of a doctor given their ID. 

    Parameters
    ----------
    ID : int
        ID of an doctor.

    Returns
    ----------
    tuple
        Returns a tuple with two elements. The first element(a boolean variable) checks to see if the database operations worked correctly. The second element is a list of all data.
    """

    try:
        cursor = connection.cursor(dictionary=True)
        finalData = []
        cursor.execute(
            'SELECT affil.affiliationid, affil.hospitalid, affil.appointmentschedule, hosp.name, hosp.type, hosp.addressline1, hosp.addressline2, hosp.city, hosp.state, hosp.country, hosp.zipcode, hosp.phone, hosp.email FROM affiliation affil inner join hospitals hosp on affil.hospitalid = hosp.hospitalid where affil.isactive = "TRUE" and hosp.approvalstatus = "TRUE" and affil.doctorid = %s', (int(ID),))
        data = cursor.fetchall()
        print(data)
        for record in data:
            finalData.append({"affiliationid": record["affiliationid"], "hospitalid": record["hospitalid"], "appointmentschedule": record["appointmentschedule"], "name": record["name"],
                              "addressline1": record["addressline1"], "addressline2": record["addressline2"], "city": record["city"], "state": record["state"],
                              "country": record["country"], "zipcode": record["zipcode"], "phone": record["phone"], "email": record["email"]})
        cursor.close()
        return True, finalData
    except mysql.connector.Error as error:
        print("Failed to get data {}".format(error))
        msg = "Failed to get data {}".format(error)
        return False, msg

    except Exception as e:
        print("some error occurred in getAfiiliationByDoctor: {}".format(e))
        msg = "Failed to get data {}".format(e)
        return False, msg


def getAfiiliationByHospital(ID):
    """
    Gets all affiliated doctors of a hospital given their ID. 

    Parameters
    ----------
    ID : int
        ID of an hospital.

    Returns
    ----------
    tuple
        Returns a tuple with two elements. The first element(a boolean variable) checks to see if the database operations worked correctly. The second element is a list of all data.
    """

    try:
        cursor = connection.cursor(dictionary=True)
        finalData = []
        cursor.execute(
            'SELECT affil.affiliationid, affil.doctorid, affil.appointmentschedule, doc.firstname, doc.lastname, doc.primaryspecality, doc.secondaryspecialty, doc.type, doc.degree, doc.phone, doc.email, doc.gender, doc.yoe FROM affiliation affil inner join doctors doc on affil.doctorid = doc.doctorid where affil.isactive = "TRUE" and doc.approvalstatus = "TRUE" and affil.hospitalid = %s', (int(ID),))
        data = cursor.fetchall()
        print(data)
        for record in data:
            finalData.append({"affiliationid": record["affiliationid"], "doctorid": record["doctorid"], "appointmentschedule": record["appointmentschedule"], "firstname": record["firstname"],
                              "lastname": record["lastname"], "primaryspecality": record["primaryspecality"], "secondaryspecialty": record["secondaryspecialty"], "type": record["type"],
                              "degree": record["degree"], "phone": record["phone"], "email": record["email"], "gender": record["gender"],"yoe": record["yoe"]})
        cursor.close()
        return True, finalData
    except mysql.connector.Error as error:
        print("Failed to get data {}".format(error))
        msg = "Failed to get data {}".format(error)
        return False, msg

    except Exception as e:
        print("some error occurred in getAfiiliationByHospital: {}".format(e))
        msg = "Failed to get data {}".format(e)
        return False, msg


def addAffiliation(doctorid, hospitalid, appointmentschedule):
    """
    For future check if the doctorid and hospitalid are valid from the database

    Parameters
    ----------
    doctorid : string
        Id of the doctor.
    hospitalid : string
        Id of the hospital.
    appointmentschedule : string
        schedule sent as a json inside string

    Returns
    ----------
    bool
        Checks if the user got added to the database or not.
    """

    try:
        lastmoddate = str(datetime.datetime.today()).split()[0]
        isactive = "TRUE"
        cursor = connection.cursor(dictionary=True)
        sql_insert_query = "INSERT INTO affiliation (doctorid, hospitalid, appointmentschedule, isactive, lastmoddate) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql_insert_query, (doctorid, hospitalid, appointmentschedule, isactive, lastmoddate))
        connection.commit()
        cursor.close()
        return True
    except mysql.connector.Error as error:
        print("some error occurred in addAffiliation: {}".format(error))
        print(error)
        return False
    except Exception as e:
        print("some error occurred in addAffiliation: {}".format(e))
        return False


def updateAffiliation(data):
    """
    Updates an affiliation in the database.

    Parameters
    ----------
    data : json
        Updated affilfiation information.

    Returns
    ----------
    tuple
        Returns a tuple with two elements. The first element(a boolean variable) checks to see if the database operations worked correctly. The second element is a message about the same.
    """

    try:
        lastmoddate = str(datetime.datetime.today()).split()[0]
        cursor = connection.cursor(dictionary=True)
        mysql_update_query = """UPDATE affilfiation set appointmentschedule = %s, isactive=%s, lastmoddate=%s WHERE affiliationid = %s """

        input_data = (str(data['appointmentschedule']), str(data['isactive']), lastmoddate)
        cursor.execute(mysql_update_query, input_data)
        connection.commit()

        print("Record updated successfully into affiliation table")
        msg = "Record updated successfully into affiliation table"
        cursor.close()
        return True, msg

    except mysql.connector.Error as error:
        print("Failed to update table {}".format(error))
        msg = "Failed to update table {}".format(error)
        return False, msg

    except Exception as e:
        print("some error occurred in updateAffiliation: {}".format(e))
        msg = "Failed to update table {}".format(e)
        return False, msg


def getDoctorSearch(keyword):
    """
    Searches for doctor by firstname, lastname, primaryspecialty, secondaryspecialty

    Parameters
    ----------
    keyword : string
        keyword for search.

    Returns
    ----------
    tuple
        Returns a tuple with two elements. The first element(a boolean variable) checks to see if the database operations worked correctly. The second element is a list of all data.
    """

    try:
        cursor = connection.cursor(dictionary=True)
        finalData = []
        cursor.execute(
            'SELECT doc.doctorid, doc.firstname, doc.lastname, doc.primaryspecialty, doc.secondaryspecialty FROM doctor doc where doc.firstname = %s or doc.lastname = %s or doc.primaryspecialty = %s or doc.secondaryspecialty= %s', (str(keyword)),(str(keyword)),(str(keyword)),(str(keyword)))
        data = cursor.fetchall()
        for record in data:
            finalData.append({"doctorid": record["doctorid"], "firstname": record["firstname"], "lastname": record["lastname"], "primaryspecialty": record["primaryspecialty"], "secondaryspecialty": record["secondaryspecialty"]})
        cursor.close()
        return True, finalData
    except mysql.connector.Error as error:
        print("Failed to get data {}".format(error))
        msg = "Failed to get data {}".format(error)
        return False, msg

    except Exception as e:
        print("some error occurred in getDoctorSearch: {}".format(e))
        msg = "Failed to get data {}".format(e)
        return False, msg

def getHospitalSearch(keyword):
    """
    Searches for hospital by name, address

    Parameters
    ----------
    keyword : string
        keyword for search.

    Returns
    ----------
    tuple
        Returns a tuple with two elements. The first element(a boolean variable) checks to see if the database operations worked correctly. The second element is a list of all data.
    """

    try:
        cursor = connection.cursor(dictionary=True)
        finalData = []
        cursor.execute(
            'SELECT hosp.hospitalid, hosp.name, hosp.addressline1, hosp.addressline2, hosp.city, hosp.state, hosp.zipcode FROM hospital hosp where hosp.name = %s or hosp.addressline1 = %s or hosp.addressline2 = %s or hosp.city= %s or hosp.state = %s or hosp.zipcode= %s', str(keyword),str(keyword),str(keyword),str(keyword),str(keyword))
        data = cursor.fetchall()
        for record in data:
            finalData.append({"hospitalid": record["hospitalid"], "name": record["name"], "addressline1": record["addressline1"], "addressline2": record["addressline2"], "city": record["city"], "state": record["state"]})
        cursor.close()
        return True, finalData
    except mysql.connector.Error as error:
        print("Failed to get data {}".format(error))
        msg = "Failed to get data {}".format(error)
        return False, msg

    except Exception as e:
        print("some error occurred in getHospitalSearch: {}".format(e))
        msg = "Failed to get data {}".format(e)
        return False, msg

def addAppointment(userid, doctorid, hospitalid, date, timeslot):
    """
    For future check if the doctorid and hospitalid are valid from the database

    Parameters
    ----------
    userid : string
        Id of the doctor.
    doctorid : string
        Id of the doctor.
    hospitalid : string
        Id of the hospital.
    date : string
        appoitnment date
    timeslot : string
        appoitnment timeslot

    Returns
    ----------
    bool
        Checks if the appointment got added to the database or not.
    """

    try:
        lastmoddate = str(datetime.datetime.today()).split()[0]
        isactive = "TRUE"
        cursor = connection.cursor(dictionary=True)
        sql_insert_query = "INSERT INTO appointment (userid, doctorid, hospitalid, date, timeslot, isactive, lastmoddate) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql_insert_query, (userid, doctorid, hospitalid, date, timeslot, isactive, lastmoddate))
        connection.commit()
        cursor.close()
        return True
    except mysql.connector.Error as error:
        print("some error occurred in addAppointment: {}".format(error))
        print(error)
        return False
    except Exception as e:
        print("some error occurred in addAppointment: {}".format(e))
        return False