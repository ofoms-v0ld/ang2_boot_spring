package com.example.controllers;

import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.example.controllers.wrapper.BodyPost;
import com.example.controllers.wrapper.BodyPost_razd;

@Controller
public class CryptoController {
	
	@Autowired
    private Environment env;

	/**
	   * POST /uploadFile -> receive and locally save a file.
	   * 
	   * @param uploadfile The uploaded file as Multipart file parameter in the 
	   * HTTP request. The RequestParam name must be the same of the attribute 
	   * "name" in the input tag with type file.
	   * 
	   * @return An http OK status in case of success, an http 4xx status in case 
	   * of errors.
	   */
	  @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	  @ResponseBody
	  public ResponseEntity<?> uploadFile(
	      @RequestParam("uploadfile") MultipartFile uploadfile) {
	    
	    try {
	      // Get the filename and build the local file path
	      String filename = uploadfile.getOriginalFilename();
	      String directory = env.getProperty("netgloo.paths.uploadedFiles");
	      String filepath = Paths.get(directory, filename).toString();
	      
	      // Save the file locally
	      BufferedOutputStream stream =
	          new BufferedOutputStream(new FileOutputStream(new File(filepath)));
	      stream.write(uploadfile.getBytes());
	      stream.close();
	    }
	    catch (Exception e) {
	      System.out.println(e.getMessage());
	      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }
	    
	    return new ResponseEntity<>(HttpStatus.OK);
	  }
	  
	  
	 /**
	 * Метод загружает на сервер подписанные данные и сохраняет в файл
	 * @param body - обвертка для content http Post
	 * @return
	 */
	@RequestMapping(value = "/uploadFile2", method = RequestMethod.POST)
	  @ResponseBody
	  public ResponseEntity<?> uploadFile2(@RequestBody BodyPost body) {
	  File file = null;
	  try {
		    System.out.println("##2 "+body.getNamefile());
		    System.out.println("##2 "+body.getCades_bes_sov());
			file = new File("src/main/webapp"+File.separator+"file_singed");
			file = new File(file.getAbsolutePath()+File.separator+body.getNamefile()+".p7s");
			if(file.createNewFile()){}else{
				file.delete();
				file.createNewFile();
			}
			
			BufferedOutputStream stream =
			          new BufferedOutputStream(new FileOutputStream(new File(file.getAbsolutePath())));
		      stream.write(body.getCades_bes_sov().getBytes());
		      stream.close();
				
			
	    }
	    catch (Exception e) {
	      System.out.println(e.getMessage());
	      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }
	    
	    return new ResponseEntity<String>(file.getAbsolutePath().substring(file.getAbsolutePath().indexOf("file_singed")),HttpStatus.OK);
	  }
	
	@RequestMapping(value = "/uploadFile3", method = RequestMethod.POST)
	  @ResponseBody
	  public ResponseEntity<?> uploadFile3(@RequestBody BodyPost_razd body) {
	  File file = null;
	  try {
		    System.out.println("##2 "+body.getNamefile());
		    System.out.println("##2 "+body.getCades_bes_sov());
		    System.out.println("##2 "+body.getFileInBase64());
			file = new File("src/main/webapp"+File.separator+"file_singed");
			file = new File(file.getAbsolutePath()+File.separator+body.getNamefile()+".p7s");
			if(file.createNewFile()){}else{
				file.delete();
				file.createNewFile();
			}
			
			BufferedOutputStream stream =
			          new BufferedOutputStream(new FileOutputStream(new File(file.getAbsolutePath())));
		      stream.write(body.getCades_bes_sov().getBytes());
		      stream.close();
		      
		    if(body.getFileInBase64() != null){  
			    file = new File(file.getAbsolutePath().replace(".p7s", ""));
			    if(file.createNewFile()){}else{
					file.delete();
					file.createNewFile();
				}
			    
			    byte[] decoded = Base64.decodeBase64(body.getFileInBase64().getBytes());
			    stream = new BufferedOutputStream(new FileOutputStream(file.getAbsolutePath()));
				for(int i = 0; i < decoded.length; i++){
					stream.write(decoded[i]);
				}
				stream.close();
				String[] mas={file.getAbsolutePath().substring(file.getAbsolutePath().indexOf("file_singed")),file.getAbsolutePath().substring(file.getAbsolutePath().indexOf("file_singed"))+".p7s"};
				return new ResponseEntity<String[]>(mas,HttpStatus.OK);
		    }else{
				return new ResponseEntity<String>(file.getAbsolutePath().substring(file.getAbsolutePath().indexOf("file_singed")),HttpStatus.OK);		    	
		    }
		    
		    
	    }
	    catch (Exception e) {
	      System.out.println(e.getMessage());
	      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }
	    
	    
	  }

	
	
}
